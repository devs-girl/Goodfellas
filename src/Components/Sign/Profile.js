import React from 'react';
import '../../Components/Sign/Profile.css';

const Profile = () => {
    return (
        <div>
            <div id="tsum-tabs">
                <input id="tab1" type="radio" name="tabs" checked />
                <label for="tab1">Respect by   </label>

                <input id="tab2" type="radio" name="tabs" />
                <label for="tab2">Like</label>

                <input id="tab3" type="radio" name="tabs" />
                <label for="tab3">Liked by</label>

                <input id="tab4" type="radio" name="tabs" />
                <label for="tab4">In common</label>

                <div id="content1">
                    <p>1</p>
                    <img src="" alt="" />
                </div>

                <div id="content2">
                    <p>
                        CONTENT FIR TAB 2
                    </p>
                </div>

                <div id="content3">
                    <p>
                        CONTENT FIR TAB 3
                    </p>
                </div>

                <div id="content4">
                    <p>
                        CONTENT FIR TAB 4
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;