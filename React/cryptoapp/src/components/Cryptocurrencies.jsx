import millify from 'millify';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { card, Row, Col, Input, Card } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const [cryptos, setcryptos] = useState(cryptosList?.data?.coins);
  const { data: cryptosList, isFetching} = useGetCryptosQuery(count);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setcryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [cryptosList, searchTerm])

  if (isFetching) return 'Loading...';
 
  return (
    <>
      <div>
        <Input 
          placeholder={'Search cryptocurrency'}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Row gutter={[25, 25]} className='crypto-card-container'>
        {
          cryptos?.map((currency) => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
              <Link to={`/crypto/${currency.uuid}`}>
                <Card 
                  title={`${currency.rank}`}
                  extra={<img className='crypto-image' src={currency.iconUrl} />}
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Matket Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default Cryptocurrencies;