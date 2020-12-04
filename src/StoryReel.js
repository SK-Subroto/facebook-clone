import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://upload.wikimedia.org/wikipedia/commons/0/03/Deepika_Padukone_and_Ranveer_Singh_reception.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/1/1e/Deepika_p_Lux-Award_2016.jpg"
                title="Deepika Padukone"
            />
            <Story 
                image="https://upload.wikimedia.org/wikipedia/commons/e/e7/Mark_Zuckerberg_in_Prague_2013.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/f/fc/MarkZuckerberg-crop.jpg"
                title="Mark Zuckerberg"
            />
            <Story 
                image="https://upload.wikimedia.org/wikipedia/commons/6/62/Shahrukh_Khan_and_Gauri_at_%27The_Outsider%27_launch_party.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/8/86/SRK_at_61st_filmfare.jpg"
                title="Shah Rukh Khan"
            />
            <Story 
                image="https://upload.wikimedia.org/wikipedia/commons/f/f4/2019.06.09_Capital_Pride_Festival_and_Concert%2C_Washington%2C_DC_USA_1600206_%2848038692756%29.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/0/01/Marshmello2_%28Cropped%29.png"
                title="Marshmello"
            />
            <Story 
                image="https://upload.wikimedia.org/wikipedia/commons/2/25/Shraddha_Kapoor_at_IBJA_awards_and_fashion_showcase.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/a/a6/Shraddha_Kapoor_at_Badlapur_success_bash.jpg"
                title="Shraddha Kapoor"
            />
            
        </div>
    )
}

export default StoryReel
