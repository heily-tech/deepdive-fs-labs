package hello.springtx.propagation;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.UnexpectedRollbackException;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import javax.sql.DataSource;

import static org.assertj.core.api.Assertions.assertThatThrownBy;

@Slf4j
@SpringBootTest
public class BasicTxTest {

    @Autowired
    PlatformTransactionManager txManager;

    @TestConfiguration
    static class Config {
        @Bean
        public PlatformTransactionManager transactionManager(DataSource dataSource) {
            return new DataSourceTransactionManager(dataSource);
        }
    }

    @Test
    void commit() {
        log.info("Start Transaction");
        TransactionStatus status = txManager.getTransaction(new DefaultTransactionDefinition());

        log.info("Start transaction commit.");
        txManager.commit(status);
        log.info("Complete transaction commit.");
    }

    @Test
    void rollback() {
        log.info("Start Transaction");
        TransactionStatus status = txManager.getTransaction(new DefaultTransactionDefinition());

        log.info("Start transaction rollback");
        txManager.rollback(status);
        log.info("Complete transaction rollback");
    }

    @Test
    void double_commit() {
        log.info("Start Transaction1");
        TransactionStatus tx1 = txManager.getTransaction(new DefaultTransactionDefinition());
        log.info("Transaction1 commit.");
        txManager.commit(tx1);

        log.info("Start Transaction2");
        TransactionStatus tx2 = txManager.getTransaction(new DefaultTransactionDefinition());
        log.info("Transaction2 commit.");
        txManager.commit(tx2);
    }

    @Test
    void double_commit_rollback() {
        log.info("Start Transaction1");
        TransactionStatus tx1 = txManager.getTransaction(new DefaultTransactionDefinition());
        log.info("Transaction1 commit.");
        txManager.commit(tx1);

        log.info("Start Transaction2");
        TransactionStatus tx2 = txManager.getTransaction(new DefaultTransactionDefinition());
        log.info("Transaction2 rollback.");
        txManager.rollback(tx2);
    }

    @Test
    void inner_commit() {
        log.info("Start outer transaction");
        TransactionStatus outerTx = txManager.getTransaction(new DefaultTransactionDefinition());
        log.info("outerTx.isNewTransaction()={}", outerTx.isNewTransaction());

        log.info("Start inner transaction");
        TransactionStatus innerTx = txManager.getTransaction(new DefaultTransactionDefinition());
        log.info("innerTx.isNewTransaction()={}", innerTx.isNewTransaction());
        log.info("Inner transaction commit");
        txManager.commit(innerTx);

        log.info("Outer transaction commit");
        txManager.commit(outerTx);
    }

    @Test
    void outer_rollback() {
        log.info("Start outer transaction");
        TransactionStatus outerTx = txManager.getTransaction(new DefaultTransactionDefinition());

        log.info("Start inner transaction");
        TransactionStatus innerTx = txManager.getTransaction(new DefaultTransactionDefinition());
        log.info("innerTx.isNewTransaction()={}", innerTx.isNewTransaction());
        log.info("Inner transaction commit");
        txManager.commit(innerTx);

        log.info("Outer transaction rollback");
        txManager.rollback(outerTx);
    }

    @Test
    void inner_rollback() {
        log.info("Start outer transaction");
        TransactionStatus outerTx = txManager.getTransaction(new DefaultTransactionDefinition());

        log.info("Start inner transaction");
        TransactionStatus innerTx = txManager.getTransaction(new DefaultTransactionDefinition());
        log.info("innerTx.isNewTransaction()={}", innerTx.isNewTransaction());
        log.info("Inner transaction rollback");
        txManager.rollback(innerTx);

        log.info("Outer transaction commit");
        assertThatThrownBy(() -> txManager.commit(outerTx))
                .isInstanceOf(UnexpectedRollbackException.class);
    }
}
