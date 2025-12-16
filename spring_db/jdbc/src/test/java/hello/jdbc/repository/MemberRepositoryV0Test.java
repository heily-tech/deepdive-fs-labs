package hello.jdbc.repository;

import hello.jdbc.domain.Member;
import org.junit.jupiter.api.Test;

import java.sql.SQLException;

public class MemberRepositoryV0Test {

    MemberRepositoryV0 repository =new MemberRepositoryV0();

    @Test
    void crud() throws SQLException {
        // save
        Member memberV0 = new Member("memberV0", 10_000);
        repository.save(memberV0);
    }
}
