import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

// import moment from 'moment/moment';
const moment = require('moment');
const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';


const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: newsCategory, count: simplified ? 6 : 12 });
  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return 'Loading News.....';

  console.log(cryptoNews);
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder='Select a Crypto'
            optionFilterProp='Children'
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value={'Cryptocurrency'}>Cryptocurrency</Option>
            {
              data?.data?.coins?.map((coin) => <Option value={coin.name}>{coin.name}</Option>)
            }
          </Select>
        </Col>
      )}
      {
        cryptoNews?.value?.map((news, index) => (
          <Col xs={24} sm={12} lg={8}>
            <Card hoverable className='news-card'>
              <a href={news.url} target='_blank' re="noreferrer">
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>
                    {news.name}
                  </Title>
                  <img style={{ maxWidth: '200px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt={`${news.name}`} />
                </div>
                  <p>
                    {
                      news.description.length > 100
                      ? `${news.description.substring(0, 100)} ...`
                      : news.description
                    }
                  </p>
                  <div className='provider-container'>
                    <div>
                      <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImage } alt="Provider Image" />
                      <Text className='provider-name'>{news?.provider[0]?.name}</Text>
                    </div>
                      <Text>{moment(news?.datePublished).startOf('ss').fromNow()}</Text>
                  </div>
              </a>
            </Card>
          </Col>
        ))
      }
    </Row>
  )
}

export default News;