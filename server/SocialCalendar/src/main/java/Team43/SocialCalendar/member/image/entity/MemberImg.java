package Team43.SocialCalendar.member.image.entity;

import Team43.SocialCalendar.member.entity.Member;

import javax.persistence.*;

@Entity
public class MemberImg {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberImgId;

    @OneToOne
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    @Column(length = 100)
    private String img;
}