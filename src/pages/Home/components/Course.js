import React from 'react'
import thumbnail from '../../../img/img1.png'
import user from '../../../img/icon-user-white.svg'
import heartIcon from '../../../img/icon-heart.svg'
import viewMore from '../../../img/icon-viewmore.svg'
import avatar from '../../../img/avt.png'

export default function Course() {
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <a className="cover" href="#">
                    <img src={thumbnail} alt="" />
                    <span className="badge b1">Đã kết thúc</span>
                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src={user} alt="" />
                            12</div>
                            <div className="heart">
                                <img src={heartIcon} alt="" /> 100
                          </div>
                        </div>
                        <div className="share">
                            <img src={viewMore} alt="" />
                        </div>
                    </div>
                </a>
                <div className="info">
                    <a className="name" href="#">
                        Front-end căn bản
                      </a>
                    <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={avatar} alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                    </div>
                    <div className="register-btn">Đăng Ký</div>
                </div>
            </div>
        </div>

    )
}
