package hello.jdbc.repository;

import hello.jdbc.domain.Member;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;

import java.sql.SQLException;

import static org.assertj.core.api.Assertions.*;

@Slf4j
public class MemberRepositoryV0Test {

    MemberRepositoryV0 repository =new MemberRepositoryV0();

    @Test
    void crud() throws SQLException {
        // save
//        Member memberV0 = new Member("memberV0", 10_000);
//        repository.save(memberV0);
        Member memberV0 = repository.findById("memberV0");

        // findById
        Member findMember = repository.findById(memberV0.getMemberId());
        log.info("findMember={}", findMember);
        assertThat(findMember).isEqualTo(memberV0);

        // update
        repository.update(memberV0.getMemberId(), 20_000);
        Member updatedMember = repository.findById(memberV0.getMemberId());
        log.info("updatedMember={}", updatedMember);
        assertThat(updatedMember.getMoney()).isEqualTo(20_000);
    }
}
