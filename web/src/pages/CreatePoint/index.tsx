import React, { useEffect, useState } from 'react';
import './style.css';

import { Map, TileLayer, Marker } from 'react-leaflet';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface Item {
  id: string,
  image_url: string,
  title: string,
}

const CreatePoint = () => {

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.get('/items').then((response) => {
      setItems(response.data);
    })
  }, []);

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt=""/>
        <Link to='/'>
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>
      <form>
        <h1>Cadastro do<br/>ponto de coleta</h1>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
              />
            </div>
          </div>

        </fieldset>
        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={[51.4914356, -0.058923]} zoom={13}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.4914356, -0.058923]}></Marker>
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF...</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma cidade...</option>
              </select>
            </div>
          </div>
          
        </fieldset>
        <fieldset>
          <legend>
            <h2>Ítems de coleta</h2>
            <span>Selecione um ou mais items abaixo</span>
          </legend>
          <ul className="items-grid">
            { items.map((item: Item) => {
              return (
                <li key={item.id}>
                  <img src={item.image_url} alt={item.title}/>
                  <span>{item.title}</span>
                </li>
              );
            }) }
          </ul>
        </fieldset>
        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
}

export default CreatePoint;