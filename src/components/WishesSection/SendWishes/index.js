import React, { useState, Fragment } from 'react';
import { Link } from 'gatsby';
import malePhoto from '@components/WishesSection/assets/male.png';
import data from '@emoji-mart/data'
import EmojiMartPicker from 'emoji-mart-picker';
import imageCompression from 'browser-image-compression';

function SendWishes( {urlCode, urlName, urlType} ) {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [imageFilename, setImageFilename] = useState();
  const [infoName, setInfoName] = useState();
  const [wishes, SetWishes] = useState();

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const handleSetImage = async (e) => {
    setImageFilename(e.target.value);
    //dua2nya bisa dipakai
//    var file = document.querySelector('input[type="file"]').files[0];
    var file = e.target.files[0];
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    const compressedFile = await imageCompression(file, options);
    var reader = new FileReader();
    reader.readAsDataURL(compressedFile);
    reader.onload = function () {
      setImage(reader.result)
    };
    var showImage = document.getElementById('showImage');
    if (file) {
      showImage.src = URL.createObjectURL(file)
    };
  };

  const handleSetInfoName = (e) => {
    setInfoName(e.target.value);
  };

  const handleSetWishes = (e) => {
    SetWishes(e.target.value);
  };

  const handleAddEmoji = (e) => {
    if (wishes){
        SetWishes(wishes + e.native);
    } else {
        SetWishes(e.native);
    }
  };

  const handleWishesData = async () => {
    if (!name || !infoName || !wishes){
        alert('silahkan lengkapi data !');
    } else {
        const params = {
            'name': name,
            'description': infoName,
            'wishes': wishes,
            'image': image,
            'image_filename': imageFilename,
            'invitation_code': urlCode,
            'invitation_name': urlName,
        }
        let url = 'https://project.miftahussalam.com/wishes?' + ( new URLSearchParams( params ) ).toString();
        try{
          await fetch(url, { mode: 'no-cors'}, {
            method: 'GET'
          });
          alert('berhasil dikirim');
        }catch(err){
          alert(`gagal dikirim, mungkin ukuran foto terlalu besar. ${err}`);
        }
        window.location.assign(`/send-wishes?code=${urlCode}&name=${urlName}&type=${urlType}`);
    }
  };

  return (
    <div>
      <h2 className="title">Say Something For Us</h2>
      <h3 className="title__sub">Arin & Miftah Wedding</h3>

      <Fragment>
        <form>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div class="form-group">
                <label for="name">Nama</label>
                <input
                  value={name}
                  onChange={handleSetName}
                  type="text"
                  class="form-control"
                  placeholder={urlName}
                  required
                ></input>
              </div>
              <div class="form-group">
                <label for="image">Foto (Optional)</label>
                <input
                  value={imageFilename}
                  onChange={handleSetImage}
                  type="file"
                  class="form-control-file"
                  id="img"
                  accept="image/*"
                ></input>
                <br></br>
                <img id="showImage" src={malePhoto} alt="foto" width="30%" height="30%"/>
              </div>
              <div class="form-group">
                <label for="infoName">Keterangan</label>
                <input
                  value={infoName}
                  onChange={handleSetInfoName}
                  type="text"
                  class="form-control"
                  placeholder="misal: Teman SMP Arin"
                  required
                ></input>
              </div>
              <label for="wishes">Pesan</label>
              <br></br>
              <div class="form-group custom-emoji">
                <textarea
                    value={wishes}
                    onChange={handleSetWishes}
                    rows="5"
                    cols="60"
                    class="form-control"
                    placeholder="Tulis pesan"
                    required
                ></textarea>
                <EmojiMartPicker data={data} onChange={handleAddEmoji}>
                  <button title="emoticon" class="custom-emoji-botton">😊</button>
                </EmojiMartPicker>
              </div>
              <br></br>
              <button type="reset" class="btn btn-primary" onClick={() => handleWishesData()}>
                Kirim
              </button>
              <br></br>
              <br></br>
              <Link to={`/?type=${urlType}&to=${urlName}&code=${urlCode}`}>
                <button className="btn primary">{`< Kembali ke Homepage`}</button>
              </Link>
              <br></br>
              <br></br>
              <div class="tinfo">Note:</div>
              <div class="tdata additional">
                <ul style={{ paddingLeft: '16px' }}>
                  <li>
                    Pesan ini akan tampil di halaman depan, tapi tidak realtime (ada jeda waktu)
                  </li>
                  <li>
                    Ukuran foto tidak perlu presisi, karna akan menyesuaikan
                  </li>
                </ul>
                <br />
              </div>
            </div>
          </div>
        </form>
      </Fragment>
    </div>
  );
}

export default SendWishes;
