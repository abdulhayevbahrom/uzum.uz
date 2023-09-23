import React from 'react'
import './Delivery.css'
import { PiCoatHangerBold } from 'react-icons/pi';
import { GoClock } from 'react-icons/go';
import { MdLocationOn } from 'react-icons/md';
import Header from '../header/Header';

function Delivery() {
  return (
    <>
      <Header />
      <div className='Delivery'>
        <div className="Delivery_item">
          <p>Uzum</p>
          <hr />
          <div className="item">
            <div className="Delivery_div1">
              <p>
                Topshirish punktlari
              </p>
              <a href="./">Vakansiyalar</a>
            </div>
            <div className="Delivery_div2">
              <h1>Topshirish punkti</h1>
              <p>Oʻzbekiston 67 ta shahridagi topshirish punktlariga bepul yetkazib berish</p>
              <div className="elements">

                <div className="scroll">
                  <div className="Details">
                    <ul>
                      <li><select>
                        <option value="toshkent">Toshkent</option>
                        <option value="oLMAZOR (chinoz tumani)">Olmazor (chinoz tumani)</option>
                        <option value="olmaliq">olmaliq</option>
                        <option value="Angren">Angren</option>
                        <option value="Andijon">Andijon</option>
                        <option value="Asaka">Asaka</option>
                        <option value="sdfgaedfr">Ohangaron</option>
                        <option value="bek obot">Bekobot</option>

                      </select></li>

                    </ul>
                    <ul>
                      <li><h3>Toshkent sh., Olmazor tumani, Talabalar ko'chasi, 2-chi uy</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Olmazor tumani, Talabalar ko'chasi, 2-chi uy</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Yashnobod tumani, Farg‘ona yo‘li va THAY (Qo‘yliq) ko‘chalari kesishmasi</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Yashnobod tumani, Farg‘ona yo‘li va THAY (Qo‘yliq) ko‘chalari kesishmasi</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Mirobod tumani, Farg'ona Yo'li ko'chasi (Risoviy)</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Mirobod tumani, Farg'ona Yo'li ko'chasi (Risoviy)</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Chilonzor tumani, 7-mavze, 45b-uy (Qatortol)</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Chilonzor tumani, 7-mavze, 45b-uy (Qatortol)</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Sergeli tumani, Sergeli-7 mavzesi, 2-uy</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Sergeli tumani, Sergeli-7 mavzesi, 2-uy</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Yunusobod 7 dahasi, 39A uy</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Yunusobod 7 dahasi, 39A uy</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Olmazor tumani, Qora-qamish 1/4 mavzesi, 28 uy (Avtosalon ro'parasi)</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Olmazor tumani, Qora-qamish 1/4 mavzesi, 28 uy (Avtosalon ro'parasi)</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Olmazor tumani, Talabalar ko'chasi, 2-chi u</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./"> Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Olmazor tumani, Talabalar ko'chasi, 2-chi uy</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Yashnobod tumani, Farg‘ona yo‘li va THAY (Qo‘yliq) ko‘chalari kesishmasi</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./"></a>Kiyib koʻrish joyi bor</li>
                      <li><MdLocationOn className='go' /><a href="./"></a>Toshkent sh., Yashnobod tumani, Farg‘ona yo‘li va THAY (Qo‘yliq) ko‘chalari kesishmasi</li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Yunusobod tumani, Bog‘ishamol ko‘chasi, 3-uy (TATU)</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Yunusobod tumani, Bog‘ishamol ko‘chasi, 3-uy (TATU)</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Mirzo Ulug'bek tumani, Mirzo Ulug'bek ko'chasi, 87-chi uy</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Mirzo Ulug'bek tumani, Mirzo Ulug'bek ko'chasi, 87-chi uy</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Chilonzor tumani, 1-mavze, 14-uy (Muqimiy ko'chasi)</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./"></a>Kiyib koʻrish joyi bor</li>
                      <li><MdLocationOn className='go' /><a href="./"></a>Toshkent sh., Chilonzor tumani, 1-mavze, 14-uy (Muqimiy ko'chasi)</li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Uchtepa tumani, 23-mavze, 59-uy (Farhod bozori)</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Uchtepa tumani, 23-mavze, 59-uy (Farhod bozori)</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Mirobod tumani, Qo'yliq mavzesi 1-chi daha, 21-chi uy</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Mirobod tumani, Qo'yliq mavzesi 1-chi daha, 21-chi uy</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Yashnobod tumani, Xosiyat ko'chasi, 15-chi A uy</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Yashnobod tumani, Xosiyat ko'chasi, 15-chi A uy</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Shayxontohur tumani, Gulobod mavzesi, Beruniy ko'chasi, 2-chi uy</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Shayxontohur tumani, Gulobod mavzesi, Beruniy ko'chasi, 2-chi uy</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Yashnobod tumani, Ohangaron yo'li ko'chasi, 70-chi uy</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Yashnobod tumani, Ohangaron yo'li ko'chasi, 70-chi uy</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Yangihayot tumani, 8-chi qurilish hududi, 20-chi uy</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Yangihayot tumani, 8-chi qurilish hududi, 20-chi uy</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Ahmad Donish ko'chasi, 59-chi uy</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Ahmad Donish ko'chasi, 59-chi uy</a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 20:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="Details">
                    <ul>
                      <li><h3>Toshkent sh., Yunusobod tumani, 14-mavze, A. Donish ko‘chasi (Korzinka)</h3></li>
                      <li>< PiCoatHangerBold className='pi' /><a href="./">Kiyib koʻrish joyi bor</a></li>
                      <li><MdLocationOn className='go' /><a href="./">Toshkent sh., Yunusobod tumani, 14-mavze, A. Donish ko‘chasi (Korzinka)  </a></li>
                      <li><GoClock className='md' /><a href="./">10:00 - 21:00, dam olish kunisiz</a></li>
                    </ul>
                  </div>
                  <hr />
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.6352380774917!2d71.6746682521286!3d40.99745278582448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4dcdcddeff89%3A0xe8a56e035fc982ef!2sAlgoritm%20EDU!5e0!3m2!1suz!2s!4v1695470575114!5m2!1suz!2s" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='google maps'></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}









export default Delivery
