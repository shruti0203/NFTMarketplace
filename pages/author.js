import React, {useState, useEffect} from "react";

//INTERNAL IMPORT
import Style from "../styles/author.module.css";
import {Banner,NftCardTwo} from "../collectionPage/collectionindex";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import {Brand,Title} from "../components/componentsindex";
import images from "../img";
import { AuthorProfileCard,AuthorTaps,AuthorNFTCardBox } from "../authorPage/componentindex";

const author = () =>{
    const followerArray = [
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
    ]

    const [collectibles, setCollectibles] =useState(true);
    const [created, setCreated] =useState(false);
    const [like, setLike] =useState(false);
    const [follower, setFollower] =useState(false);
    const [following, setFollowing] =useState(false);


    return (
       <div className={Style.author}>
        <Banner bannerImage={images.creatorbackground2}/>
        <AuthorProfileCard/>
        <AuthorTaps setCollectibles={setCollectibles} setCreated={setCreated} setLike={setLike} 
        setFollower={setFollower} setFollowing={setFollowing}/>
        <AuthorNFTCardBox  collectibles={collectibles} created={created} like={like} 
        follower={follower} following={following} />
        <Title 
         heading="Popular Creators"
         paragraph="Click on music icon and enjoy NFT music or audio"/>
         <div className={Style.author_box}>
            {followerArray.map((el,i)=>(
                 <FollowerTabCard i={i} el={el}/>
            ))}
         </div>
         
        
         <Brand/>
       </div>
    );
}

export default author;