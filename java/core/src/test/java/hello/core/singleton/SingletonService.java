package hello.core.singleton;

public class SingletonService {
    public static final SingletonService instance = new SingletonService();

    public static SingletonService getInstance() {
        return instance;
    }

    // private으로 선언 -> 외부에서 new 키워드를 사용한 객체 생성을 못하게 막음
    private SingletonService() {

    }

    public void logic() {
        System.out.println("싱글톤 객체 로직 호출");
    }
}
