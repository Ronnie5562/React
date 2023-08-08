import React from 'react';
// import moment from 'moment/moment';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const moment = require('moment');
const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';


const News = ({ simplified }) => {
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 });

  if (!cryptoNews?.value) return 'Loading News.....';


  console.log(cryptoNews);
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <
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