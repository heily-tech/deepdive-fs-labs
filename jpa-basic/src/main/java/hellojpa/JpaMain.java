package hellojpa;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.Persistence;

import java.util.List;

public class JpaMain {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");

        EntityManager em = emf.createEntityManager();
        EntityTransaction tx = em.getTransaction();
        tx.begin();

        try {
            // 회원 등록
//            createMember(1L, "HelloA", em);
//            createMember(2L, "HelloB", em);

            // 회원 단일 조회
            findMember(1L, em);
            findMember(2L, em);

            // 회원 수정
            modifyMember(1L, "HelloJPA", em);
            findMember(1L, em);

            modifyMember(1L, "HelloA", em);
            findMember(1L, em);

            // 회원 삭제
//            removeMember(2L, em);

            // 회원 다중 조회
            findAll(em);

            tx.commit();
        } catch (Exception e) {
            tx.rollback();
        } finally {
            em.close();
        }
    }

    private static void findAll(EntityManager em) {
        List<Member_JPA> result = em.createQuery("select m from Member_JPA as m", Member_JPA.class)
                        .setFirstResult(0)
                        .setMaxResults(8)
                        .getResultList();

        for (Member_JPA member : result)
            System.out.println("member.name = " + member.getName());
    }

    private static void removeMember(long id, EntityManager em) {
        Member_JPA foundMember = em.find(Member_JPA.class, id);
        em.remove(foundMember);
    }

    private static void modifyMember(Long id, String newName, EntityManager em) {
        Member_JPA foundMember = em.find(Member_JPA.class, id);
        foundMember.setName(newName);
    }

    private static void findMember(Long id, EntityManager em) {
        Member_JPA foundMember = em.find(Member_JPA.class, id);
        System.out.println("foundMember.Id = " + foundMember.getId());
        System.out.println("foundMember.Name = " + foundMember.getName());
    }

    private static void createMember(long id, String name, EntityManager em) {
        Member_JPA member = new Member_JPA();
        member.setId(id);
        member.setName(name);

        em.persist(member);
    }
}