import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import * as userService from '../../../app/services/userService';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

class MemberDetailed extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    const userId = this.props.match.params.id;
    const { data } = await userService.getUser(userId);
    this.setState({ user: data });
  }

  render() {
    const { user } = this.state;
    return (
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='card'>
              <img
                className='card-img-top img-thumbnail'
                src={user.photoUrl}
                alt={user.username}
              />
              <div className='card-body'>
                <div>
                  <strong>Location:</strong>
                  <p>
                    {user.city},{user.country}
                  </p>
                </div>
                <div>
                  <strong>Age:</strong>
                  <p>{user.age}</p>
                </div>
                <div>
                  <strong>Last Active:</strong>
                  <p>{user.lastActive}</p>
                </div>
                <div>
                  <strong>Member since:</strong>
                  <p>{user.created}</p>
                </div>
              </div>
              <div className='card-footer'>
                <div className='btn-group d-flex'>
                  <button className='btn btn-primary w-100'>Like</button>
                  <button className='btn btn-success w-100'>Message</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-8'>
            <div className='tab-panel'>
              <Tabs className='member-tabs'>
                <Tab eventKey='about' title='About' className='tab-content'>
                  <h4>Description</h4>
                  <p>{user.introduction}</p>
                  <h4>Looking For</h4>
                  <p>{user.lookingFor}</p>
                </Tab>
                <Tab
                  eventKey='interests'
                  title='Interests'
                  className='tab-content'
                >
                  <h4>Interests</h4>
                  <p>{user.interests}</p>
                </Tab>
                <Tab eventKey='photos' title='Photos' className='tab-content'>
                  <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false}/>
                </Tab>
                <Tab
                  eventKey='messages'
                  title='Messages'
                  className='tab-content'
                >
                  <h4>Messages will go here</h4>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemberDetailed;
