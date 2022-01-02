import React from 'react';
import { render, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Avatar from '../index';

describe('Avatar', () => {
  it('renders Avatars of different size correctly', () => {
    const wrapper = render(
      <div>
        <Avatar size="xl">XL</Avatar>
        <Avatar size="lg">LG</Avatar>
        <Avatar>MD</Avatar>
        <Avatar size="sm">SM</Avatar>
        <Avatar size="xs">XS</Avatar>
      </div>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Avatars of different shape correctly', () => {
    const wrapper = shallow(
      <div>
        <Avatar />
        <Avatar shape="circle" />
        <Avatar shape="square" />
      </div>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Avatars of different type correctly', () => {
    const wrapper = render(
      <div>
        <Avatar size="sm" style={{ fontSize: '12px' }}>
          USER
        </Avatar>
        <Avatar size="sm" style={{ color: 'red', backgroundColor: 'rgb(249, 232, 8)' }}>
          USER
        </Avatar>
        <Avatar
          size="sm"
          src="https://static-venus.shandiantech.com/skio/20211227/1640572420325_state.png"
          alt="my avatar"
        />
      </div>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Avatars correctly when set src, icon and string', () => {
    const wrapper = render(
      <div>
        <Avatar
          size="sm"
          src="https://static-venus.shandiantech.com/skio/20211227/1640572420325_state.png"
          alt="my avatar"
        />
      </div>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
