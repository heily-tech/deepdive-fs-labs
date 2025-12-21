package hello.jdbc.exception.basic;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;

@Slf4j
public class UncheckedTest {

    @Test
    void unchecked_catch() {
        Service service = new Service();
        service.callCatch();
    }

    @Test
    void unchecked_throw() {
        Service service = new Service();
        assertThatThrownBy(() -> service.callThrow())
                        .isInstanceOf(MyUncheckedException.class);
    }

    /* RuntimeException 상속 예외 */
    static class MyUncheckedException extends RuntimeException {
        public MyUncheckedException(String msg) {
            super(msg);
        }
    }

    static class Service {
        Repository repository = new Repository();

        /* 예외를 잡아서 처리 */
        public void callCatch() {
            try {
                repository.call();
            } catch (MyUncheckedException e) {
                // 예외 처리 로직
                log.info("예외 처리, message={}", e.getMessage(), e);
            }
        }

        /**
        * 예외를 밖으로 던짐
        * throws 예외 선언 하지 않아도 됨
        */
        public void callThrow() {
            repository.call();
        }
    }

    static class Repository {
        public void call() {
            throw new MyUncheckedException("ex");
        }
    }
}
