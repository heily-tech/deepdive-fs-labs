package hello.login.web.session;

import org.springframework.stereotype.Component;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 세션 관리 기능
 */

@Component
public class SessionManager {

    public static final String SESSION_COOKIE_NAME = "mySessionId";
    private Map<String, Object> sessionStore = new ConcurrentHashMap<>();

    /**
     * 세션 생성
     *
     * * Session ID를 생성
     * * Session Store에 Session ID와 보관할 값 저장
     * * Session ID로 응답 쿠키 생성
     * * 응답 쿠키를 클라이언트에 전달
     */
    public void createSession(Object value, HttpServletResponse response) {

        String sessionId = UUID.randomUUID().toString();
        sessionStore.put(sessionId, value);

        Cookie mySessionCookie = new Cookie(SESSION_COOKIE_NAME, sessionId);
        response.addCookie(mySessionCookie);

    }

    /**
     * 세션 조회
     *
     * * 요청에 포함된 Session ID 쿠키를 조회
     * * Session ID 쿠키가 없으면 null 반환
     * * Session ID 쿠키가 있으면 Session Store에서 해당 세션 값 조회 후 반환
     */
    public Object getSession(HttpServletRequest request) {
        Cookie sessionCookie = findCookie(request, SESSION_COOKIE_NAME);
        if (sessionCookie == null) {
            return null;
        }
        return sessionStore.get(sessionCookie.getValue());
    }

    /**
     * 세션 만료
     *
     * * 요청에 포함된 Session ID 쿠키를 조회
     * * Session ID 쿠키 값으로 Session Store에서 해당 세션 삭제
     */
    public void expire(HttpServletRequest request) {
        Cookie sessionCookie = findCookie(request, SESSION_COOKIE_NAME);
        if (sessionCookie != null) {
            sessionStore.remove(sessionCookie.getValue());
        }
    }

    /**
     *
     * @param request
     * @param cookieName
     * @return
     */
    private Cookie findCookie(HttpServletRequest request, String cookieName) {
        if (request.getCookies() == null) {
            return null;
        }
        return Arrays.stream(request.getCookies())
                .filter(cookie -> cookie.getName().equals(cookieName))
                .findAny()
                .orElse(null);
    }
}
