package hello.itemservice.repository.jdbctemplate;

import hello.itemservice.domain.Item;
import hello.itemservice.repository.ItemRepository;
import hello.itemservice.repository.ItemSearchCond;
import hello.itemservice.repository.ItemUpdateDto;
import hello.itemservice.repository.memory.MemoryItemRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
class JdbcTemplateItemRepositoryTest {

    @Autowired
    ItemRepository itemRepository;

    Item itemA1;
    Item itemA2;
    Item itemB1;

    @BeforeEach
    void setUp() {
        itemA1 = itemRepository.save(new Item("itemA-1", 10000, 10));
        itemA2 = itemRepository.save(new Item("itemA-2", 20000, 20));
        itemB1 = itemRepository.save(new Item("itemB-1", 30000, 30));
    }

    @AfterEach
    void afterEach() {
        //MemoryItemRepository 의 경우 제한적으로 사용
        if (itemRepository instanceof MemoryItemRepository) {
            ((MemoryItemRepository) itemRepository).clearStore();
        }
    }

    @Test
    void findById() {
        Item findItem = itemRepository.findById(itemA1.getId()).get();
        assertThat(findItem).isEqualTo(itemA1);
    }

    @Test
    void update() {
        ItemUpdateDto updateDto = new ItemUpdateDto("itemA-modified", 15_000, 99);

        itemRepository.update(itemA1.getId(), updateDto);

        Item findItem = itemRepository.findById(itemA1.getId()).get();
        assertThat(findItem.getItemName()).isEqualTo("itemA-modified");
        assertThat(findItem.getPrice()).isEqualTo(15000);
        assertThat(findItem.getQuantity()).isEqualTo(99);
    }


    /* 동적 쿼리 테스트 */

    @Test
    void findAll_noCondition() {
        List<Item> result = itemRepository.findAll(new ItemSearchCond(null, null));

        assertThat(result).containsExactlyInAnyOrder(itemA1, itemA2, itemB1);
    }

    @Test
    void findAll_itemNameOnly() {
        List<Item> result = itemRepository.findAll(new ItemSearchCond("itemA", null));

        assertThat(result).containsExactlyInAnyOrder(itemA1, itemA2);
    }

    @Test
    void findAll_maxPriceOnly() {
        List<Item> result = itemRepository.findAll(new ItemSearchCond(null, 20_000));

        assertThat(result).containsExactlyInAnyOrder(itemA1, itemA2);
    }

    @Test
    void findAll_itemNameAndMaxPrice() {
        List<Item> result = itemRepository.findAll(new ItemSearchCond("itemA", 10_000));

        assertThat(result).containsExactlyInAnyOrder(itemA1);
    }

    @Test
    void findAll_emptyItemName() {
        List<Item> result = itemRepository.findAll(new ItemSearchCond("", null));
        assertThat(result).containsExactly(itemA1, itemA2, itemB1);
    }
}