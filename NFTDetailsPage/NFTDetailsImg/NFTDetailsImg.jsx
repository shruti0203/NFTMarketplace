import React,{useState,useEffect} from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown,TiArrowSortedUp } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./NFTDetailsImg.module.css";
import images from "../../img";

const NFTDetailsImg =()=>{
    const[description,setDescription] = useState(true);
    const[details,setDetails] =useState(true);
    const[like,setLike] = useState(false);

    const openDescription= () =>{
        if(!description){
            setDescription(true);
        }else{
            setDescription(false);
        }
    };

    const openDetails = () =>{
        if(!details){
            setDetails(true);
        }else{
            setDetails(false);
        }
    };

    const likeNFT = () =>{
        if(!like){
            setLike(true);
        }else{
            setLike(false);
        }
    }

    return (
        <div className={Style.NFTDetailsImg}>
            <div className={Style.NFTDetailsImg_box}>
                <div className={Style.NFTDetailsImg_box_NFT}>
                    <div className={Style.NFTDetailsImg_box_NFT_like}>
                        <BsImage className={Style.NFTDetailsImg_box_NFT_like_icon}/>
                        <p onClick={()=>likeNFT()}>
                            {like ? (
                                <AiOutlineHeart
                                    className={Style.NFTDetailsImg_box_NFT_like_icon}
                                />
                            ):(
                                <AiFillHeart
                                    className={Style.NFTDetailsImg_box_NFT_like_icon}
                                />
                            )}
                            <span>23</span>
                        </p>
                       
                    </div>
                    <div className={Style.NFTDetailsImg_box_NFT_img}>
                        <Image 
                          src={images.nft_image_1}
                          className={Style.NFTDetailsImg_box_NFT_img_img}
                          alt="NFT img"
                          width={500}
                          height={500}
                          objectFit="cover"
                        />
                    </div>
                </div>
                <div className={Style.NFTDetailsImg_box_description}
                onClick={()=>openDescription()}
                >
                    <p>Description</p>
                    {description ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
                </div>
                {
                    description && (
                        <div className={Style.NFTDetailsImg_box_description_box}>
                            <p>Tattooed kitty Gang ("TKG") is a collection of 666 badass kitty gangsters,
                                with symbol of tattoos,living in the Proud Kitty Gang("PKG") metaverse.Each
                                TKG is an 1/1 ID as gangster member & all the joint rights.
                            </p>
        
                        </div>
                    )
                }
                <div className={Style.NFTDetailsImg_box_details} onClick={()=>openDetails()}>
                    <p>Details</p>
                    {details ? <TiArrowSortedUp/>:<TiArrowSortedDown/>}
                </div>
                {details && (
                    <div className={Style.NFTDetailsImg_box_details_box}>
                    <small>2000 x 2000 px.IMAGE(685KB)</small>
                    <p>
                        <small>Contract Address</small>
                        <br></br>
                        0x50f54758374ed743a76e86889fd754t4a
                    </p>
                    <p>
                        <small>Token ID</small>
                        100300372864
                    </p>
                </div>
                )}

                
            </div>
        </div>
    );
}

export default NFTDetailsImg;