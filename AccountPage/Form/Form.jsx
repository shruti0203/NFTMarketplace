import React from "react";
import {HiOutlineMail} from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from "react-icons/ti";
import { Button } from "../../components/componentsindex";

//INTERNAL IMPORT
import Style from "./Form.module.css";

const Form = () =>{
    return (
        <div className={Style.Form}>
            <div className={Style.Form_box}>
                <form>
                    <div className={Style.Form_box_input}>
                        <label htmlFor= "name" >Username</label>
                        <input type="text" placeholder="Parth"
                        className={Style.Form_box_input_userName}/>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="email">Email</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <HiOutlineMail/>
                            </div>
                            <input type="text" placeholder="Email*"/>
                        </div>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="description">Description</label>
                        <textarea name="" id="" cols="30" rows="6" 
                        placeholder="something about yourself in few words"
                        ></textarea>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="website">Website</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineHttp/>
                            </div>
                            <input type="text" placeholder="website"/>
                        </div>
                    </div>

                    <div className={Style.Form_box_input_social}>
                        <div className={Style.Form_box_input}>
                            <label htmlFor="facebook">Facebook</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <TiSocialFacebook/>
                            </div>
                            <input type="text" placeholder="http://parth"/>
                        </div>
                        </div>
                    

                  
                        <div className={Style.Form_box_input}>
                            <label htmlFor="Twitter">Twitter</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <TiSocialTwitter/>
                            </div>
                            <input type="text" placeholder="http://parth"/>
                        </div>
                        </div>
                   

                    
                        <div className={Style.Form_box_input}>
                            <label htmlFor="Instagram">Instagram</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <TiSocialInstagram/>
                            </div>
                            <input type="text" placeholder="http://parth"/>
                        </div>
                        </div>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="wallet">Wallet address</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineHttp/>
                            </div>
                            <input type="text" placeholder="0xEAKH36461D1968SE17357WD237682SQGK"/>
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineContentCopy/>
                            </div>
                        </div>
                    </div>

                    <div className={Style.Form_box_btn}>
                        <Button btnName="Upload profile" handleClick={()=>{}}
                        classStyle={Style.button}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;