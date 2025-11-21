package hello.core.singleton;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;

import static org.junit.jupiter.api.Assertions.*;

class StatefulServiceTest {

    @Test
    void statefulServiceSingleton() {
        AnnotationConfigApplicationContext ac = new AnnotationConfigApplicationContext(TestConfig.class);
        StatefulService statefulService1 = ac.getBean(StatefulService.class);
        StatefulService statefulService2 = ac.getBean(StatefulService.class);

        // ThreadA : A 사용자가 10,000원 주문
//        statefulService1.order("userA", 10_000);
        int priceA = statefulService1.order("userA", 10_000);
        // ThreadB : B 사용자가 20,000원 주문
//        statefulService2.order("userB", 20_000);
        int priceB = statefulService2.order("userB", 20_000);

        // ThreadA : A 사용자가 주문 금액을 조회
//        int price = statefulService1.getPrice(); // 기대값 : 10,000
//        System.out.println("price = " + price);  // 실행값 : 20,000
        System.out.println("priceA = " + priceA);
        System.out.println("priceB = " + priceB);

//        Assertions.assertThat(statefulService1.getPrice()).isEqualTo(20_000);
    }

    static class TestConfig {

        @Bean
        public StatefulService statefulService() {
            return new StatefulService();
        }
    }

}