package hello.jdbc.repository;

import com.zaxxer.hikari.HikariDataSource;
import hello.jdbc.connection.ConnectionConst;
import hello.jdbc.domain.Member;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import java.sql.SQLException;
import java.util.NoSuchElementException;

import static hello.jdbc.connection.ConnectionConst.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@Slf4j
class MemberRepositoryV1Test {

    MemberRepositoryV1 repository;

    @BeforeEach
    void beforeEach() {
        // DriverManager 방식
        // 항상 새로운 커넥션 획득
//        DriverManagerDataSource dataSource = new DriverManagerDataSource(URL, USERNAME, PASSWORD);

        // Connection Pooling 방식
        // HikariProxyConnection -> JdbcConnection
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl(URL);
        dataSource.setUsername(USERNAME);
        dataSource.setPassword(PASSWORD);

        repository = new MemberRepositoryV1(dataSource);
    }


    @Test
    void crud() throws SQLException {
        // save
        Member memberV0 = new Member("memberV0", 10_000);
        repository.save(memberV0);
//        Member memberV0 = repository.findById("memberV0");

        // findById
        Member findMember = repository.findById(memberV0.getMemberId());
        log.info("findMember={}", findMember);
        assertThat(findMember).isEqualTo(memberV0);

        // update
        repository.update(memberV0.getMemberId(), 20_000);
        Member updatedMember = repository.findById(memberV0.getMemberId());
        log.info("updatedMember={}", updatedMember);
        assertThat(updatedMember.getMoney()).isEqualTo(20_000);

        // delete
        repository.delete(memberV0.getMemberId());
        assertThatThrownBy(() -> repository.findById(memberV0.getMemberId()))
                .isInstanceOf(NoSuchElementException.class);
    }
}