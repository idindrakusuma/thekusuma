import React, { useState, Fragment } from 'react';
import useGuestData from '@/hooks/useGuestData';

const PERSONAL = 1;
const ALL = 2;

function GenerateLink() {
  const [type, setType] = useState(PERSONAL);
  const [name, setName] = useState();
  const [showResult, setShowResult] = useState(false);
  const [successCopy, setSuccessCopy] = useState(false);
  const copy = require('clipboard-copy')

  const { data, loading } = useGuestData();

  const URL = `https://arin.miftahussalam.com?to=${encodeURIComponent(name).replace(/%20/g, "+")}`;

  const handleChange = (e) => {
    setType(parseInt(e.target.value, 10));
    setShowResult(false);
  };

  const handleSetName = (e) => {
    setName(e.target.value);
    setSuccessCopy(false);
  };

  const handleCopy = async (text, showAlert = false) => {
    try {
      copy(text);
      setSuccessCopy(true);
      showAlert && alert('successfully copied');
    } catch (err) {
      setSuccessCopy(false);
      alert('something went wrong');
    }
  };

  const handleResult = async () => {
    setShowResult(true);
    setSuccessCopy(false);
  };

  const renderContentType = () => {
    if (type === PERSONAL) {
      return (
        <Fragment>
          <div class="form-group">
            <label for="exampleInputEmail1">Nama Tamu</label>
            <input
              value={name}
              onChange={handleSetName}
              type="text"
              class="form-control"
              placeholder="Nama tamu.."
            ></input>
          </div>
          <button type="submit" class="btn btn-primary" onClick={() => handleResult()}>
            Generate Link
          </button>
        </Fragment>
      );
    }

    if (type === ALL) {
      return (
        <Fragment>
          <button type="submit" class="btn btn-primary" onClick={() => handleResult(true)}>
            Generate Link
          </button>
        </Fragment>
      );
    }
  };

  const renderResult = () => {
    if (!showResult) return null;

    if (type === PERSONAL) {
      return (
        <div className="col-md-4 col-md-offset-4">
          <div class="alert alert-success" role="alert" style={{ marginTop: '20px' }}>
            <strong>Berhasil !</strong> <br />
            <a href={URL} target="_blank" rel="noreferrer" style={{ color: 'green', textDecoration: 'underline' }}>
              {URL}
            </a>
            <button
              type="button"
              className="btn btn-default btn-xs"
              style={{ fontSize: '12px', padding: '4px 8px', marginLeft: '4px' }}
              onClick={() => handleCopy(URL)}
            >
              {successCopy ? 'copied' : 'copy'}
            </button>
          </div>
        </div>
      );
    }

    if (type === ALL) {
      return (
        <div className="col-md-10 col-md-offset-1" style={{ marginTop: '28px' }}>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Keterangan</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, index) => {
                  const mapURL = `https://arin.miftahussalam.com?to=${encodeURIComponent(d.name).replace(/%20/g, "+")}&type=invitation&code=${d.code}`;
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{d.name}</td>
                      <td>{d.desc}</td>
                      <td>
                        <a href={mapURL} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>
                          {mapURL}
                        </a>
                        <button
                          type="button"
                          className="btn btn-default btn-xs"
                          style={{ fontSize: '12px', padding: '4px 8px', marginLeft: '4px' }}
                          onClick={() => handleCopy(mapURL)}
                        >
                          copy
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <h2 className="title">Generator of Link Invitation</h2>
      <h3 className="title__sub">Arin & Miftah Wedding</h3>

      {loading && <h4 style={{ textAlign: 'center' }}>Memuat data..</h4>}

      {!loading && (
        <Fragment>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div class="form-group">
                <label for="exampleInputEmail1">Tipe Link</label>
                <select class="form-control" value={type} onChange={handleChange}>
                  <option value={PERSONAL}>Individu</option>
                  <option value={ALL}>Semua Undangan</option>
                </select>
              </div>
              {renderContentType()}
            </div>
          </div>
          <div className="row">{renderResult()}</div>
        </Fragment>
      )}
    </div>
  );
}

export default GenerateLink;
