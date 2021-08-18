// Contact/Resources Page

import React, { Fragment } from 'react';
import './resource.css'


export default function Resource() {
    return (
        <Fragment>
            <div id='resource-page'>
                <div id='resource-title'>Contact Info and Resources!</div>
                <div id='card'>
                    <p id='card-title'>Armadale Community Animal Rescue Group</p>
                    <p id='card-body' >You can meet any of the cats on this site through this awesome
                        rescue group!
                    </p>
                    <ul id='card-list'>
                        <li ><a id='nav-text' href='https://www.facebook.com/ArmadaleCommunityAnimalRescueGroup?ref=ts&fref=ts'><i className='fab fa-facebook-square'></i> Facebook</a></li>
                        <li><a id='nav-text' href='https://www.petrescue.com.au/groups/10644/Armadale-Community-Animal-Rescue-Group-Inc'><i className='fas fa-cat'></i> Pet Rescue</a></li>
                        <li><a id='nav-text' href="mailto:acarg@iinet.net.au"><i className='fas fa-envelope'></i> Email</a></li>
                    </ul>
                </div><br />
                <div id='card'>
                    <p id='card-title'>Cat Enclosure Ideas - Western Australia</p>
                    <div id='card-body'>This Facebook group is dedicated to the education and protection of our fluffy friends!
                        When cats are able to roam the risk of injury and worse is greatly increased and with more and more local councils passing 'cat curfews' why not be ahead of the times
                        and give your fluffy family member a way to safely expore outside!
                    </div>
                    <ul id='card-list'>
                        <li><a id='nav-text' href='https://www.facebook.com/groups/279644759164166/'><i className='fab fa-facebook-square'></i> Facebook</a></li>
                    </ul>
                </div>
            </div><br />
        </Fragment>
    );
};