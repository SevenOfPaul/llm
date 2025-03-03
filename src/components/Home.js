"use client";
import React from 'react';
import { CapsuleTabs } from 'antd-mobile';
import { useRouter } from 'next/navigation';
import { Layout } from 'antd';
import TextGeneration from './TextGeneration';
import Translation from './Translation';
import ImageClassification from './ImageClassification';
import TextToImage from './Text2Image';
import About from './About';

const { Content } = Layout;
// message.info("未做PC端适配，建议用手机访问");

const Home = ({ pathname }) => {
  const router = useRouter();

  // 根据当前的路由来设置activeKey
  let activeKey;
  switch (pathname) {
    case '/text-generation':
      activeKey = '1';
      break;
    // case '/speech-recognition':
    //   activeKey = '2';
    //   break;
    case '/text-translation':
      activeKey = '3';
      break;
    case '/image-classification':
      activeKey = '4';
      break;
    case '/text-to-image':
      activeKey = '5';
      break;
    case '/about':
      activeKey = '6';
      break;
    default:
      activeKey = '1';
      break;
  }

  const handleTabClick = (key) => {
    switch (key) {
      case '1':
        router.push('/text-generation');
        break;
      // case '2':
      //   navigate('/speech-recognition');
      //   break;
      case '3':
        router.push('/text-translation');
        break;
      case '4':
        router.push('/image-classification');
        break;
      case '5':
        router.push('/text-to-image');
        break;
      case '6':
        router.push('/about');
        break;
      default:
        break;
    }
  };

  // 渲染当前路由对应的组件
  const renderContent = () => {
    switch (pathname) {
      case '/text-generation':
        return <TextGeneration />;
      case '/text-translation':
        return <Translation />;
      case '/image-classification':
        return <ImageClassification />;
      case '/text-to-image':
        return <TextToImage />;
      case '/about':
        return <About />;
      default:
        return <TextGeneration />;
    }
  };

  return (
    <div>
      <div style={{ height: "14vh" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: 'Mojangles' }}>Workers AI</h1>
        </div>
        <div>
          <CapsuleTabs activeKey={activeKey} onChange={handleTabClick}>
            <CapsuleTabs.Tab title='文本生成' key='1' />
            {/* <CapsuleTabs.Tab title='语音识别' key='2' /> */}
            <CapsuleTabs.Tab title='文本翻译' key='3' />
            <CapsuleTabs.Tab title='图像分类' key='4' />
            <CapsuleTabs.Tab title='文本生图' key='5' />
            <CapsuleTabs.Tab title='关于' key='6' />
          </CapsuleTabs>
        </div>
      </div>
      <Content>
        {renderContent()}
      </Content>
    </div>
  );
};

export default Home;