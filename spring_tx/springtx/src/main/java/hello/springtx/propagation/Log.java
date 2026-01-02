package hello.springtx.propagation;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Log {

    @Id
    @GeneratedValue
    private Long id;

    private String msg;

    public Log() {

    }

    public Log(String msg) {
        this.msg = msg;
    }
}
