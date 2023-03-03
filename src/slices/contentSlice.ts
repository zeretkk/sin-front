import {createSlice} from "@reduxjs/toolkit";
import Art from '../assets/images/Categories/Art.png'
import Collectibles from '../assets/images/Categories/Collectibles.png'
import Music from '../assets/images/Categories/Music.png'
import Photography from '../assets/images/Categories/Photography.png'
import Sport from '../assets/images/Categories/Sport.png'
import Utility from '../assets/images/Categories/Utility.png'
import Video from '../assets/images/Categories/Video.png'
import VirtualWorlds from '../assets/images/Categories/VirtualWorlds.png'

import Basketball from '../assets/icons/category/Basketball.svg'
import MusicNotes from '../assets/icons/category/MusicNotes.svg'
import Camera from '../assets/icons/category/Camera.svg'
import MagicWand from '../assets/icons/category/MagicWand.svg'
import PaintBrush from '../assets/icons/category/PaintBrush.svg'
import Swatches from '../assets/icons/category/Swatches.svg'
import VideoCamera from '../assets/icons/category/VideoCamera.svg'
import Planet from '../assets/icons/category/Planet.svg'

export interface Category {
    title: string
    background: string
    icon: string
}
interface ContentSlice {
    categories : Category[]
    items : any[]
}

const initialState = {
    categories: [
        {title:'Art', background:Art, icon:PaintBrush}, {title:'Collectibles', background:Collectibles, icon:Swatches},
        {title:'Music', background:Music, icon:MusicNotes}, {title:'Photography', background:Photography, icon:Camera},
        {title:'Sport', background:Sport, icon:Basketball}, {title:'Utility', background:Utility, icon:MagicWand},
        {title:'Video', background:Video, icon:VideoCamera}, {title:'VirtualWorlds', background:VirtualWorlds, icon:Planet},
    ],
    items: []
} as ContentSlice

const contentSlice = createSlice({
    name:'content',
    initialState,
    reducers:{

    }
})

export default contentSlice.reducer