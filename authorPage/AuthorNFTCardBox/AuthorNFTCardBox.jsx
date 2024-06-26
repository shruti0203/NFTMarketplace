import React,{useState} from "react";

//INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import { NftCardTwo } from "../../collectionPage/collectionindex";
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";

const AuthorNFTCardBox = ({collectibles,created,like,follower,following}) =>{
    const collectiblesArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3, images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
    ];

    const createdArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
    ];

    const likeArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
    ];

    const followerArray=[
        {
            background: images.creatorbackground1,
            user:images.user1,
        },
        {
            background: images.creatorbackground2,
            user:images.user2,
        },
        {
            background: images.creatorbackground3,
            user:images.user3,
        },
        {
            background: images.creatorbackground4,
            user:images.user4,
        },
        {
            background: images.creatorbackground5,
            user:images.user5,
        },
        {
            background: images.creatorbackground6,
            user:images.user6,
        },
    ];

    const followingArray=[
           {
            background: images.creatorbackground2,
            user:images.user2,
        },
        {
            background: images.creatorbackground3,
            user:images.user3,
        },
        {
            background: images.creatorbackground4,
            user:images.user4,
        },
        {
            background: images.creatorbackground5,
            user:images.user5,
        },
        {
            background: images.creatorbackground6,
            user:images.user6,
        },
    ];
    
    return (
        <div className={Style.AuthorNFTCardBox}>
            {collectibles && <NftCardTwo NftData={collectiblesArray}/>}
            {created && <NftCardTwo NftData={createdArray}/>}
            {like && <NftCardTwo NftData={likeArray}/>}
            {/* {follower && (
                {<FollowerTabCard NftData={followerArray}/>})} */}
            {follower&&(
                <div className={Style.AuthorNFTCardBox_box}>
                    {followerArray.map((el,i)=>(
                        <FollowerTabCard i={i} el={el} />
                    ))}
                </div>
            )}

           {following&&(
                <div className={Style.AuthorNFTCardBox_box}>
                    {followingArray.map((el,i)=>(
                        <FollowerTabCard i={i} el={el} />
                    ))}
                </div>
            )}
            {/* {following && <FollowerTabCard NftData={followingArray}/>} */}
        </div>
    );
}

export default AuthorNFTCardBox;