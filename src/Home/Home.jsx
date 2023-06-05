import './Home.css';
import logoo from './images/beach.png';
import Button from 'react-bootstrap/Button';
import { AiOutlineFilter } from 'react-icons/ai';
import React, { useState } from 'react';

function Home() {
    const [selectedWilaya, setSelectedWilaya] = useState('');
  const [selectedCommune, setSelectedCommune] = useState('');

  const handleWilayaChange = (e) => {
    setSelectedWilaya(e.target.value);
    setSelectedCommune('');
  };

  const handleCommuneChange = (e) => {
    setSelectedCommune(e.target.value);
  };
  return (
    <div className='section position-relative'>
        <div className='background ' >
            <img src={logoo} alt="" className="cc" fluid />
        </div>
        <div className='content position-absolute d-flex flex-column justify-content-center align-items-center'>
            <div className='title'>
                <h1 className="text-light ch">Choose your dream home</h1>
            </div>
            <p className="text-light fs-6 p-2">
                Find your next stay
                Search low prices on hotels, homes and much more...
            </p>
        
        <div className='search d-flex bg-light p-2 rounded-4 '>
            <div className='containers '>
            <div className="input-group px-4  d-flex flex-column justify-content-center align-items-center">
                <div className="input-group-prepend">
                    <label className='labele' for="wilaya">Wilaya</label>
                </div>
                <select className="custom-select selecthome d-flex flex-column justify-content-start align-items-start"  name="wilaya"  id="wilaya" value={selectedWilaya} onChange={handleWilayaChange}>
                    <option value="">Select Wilaya</option>
                    <option value="alger">Alger</option>
                    <option value="batna">Batna</option>
                </select>
                </div>
            </div>
            <div className='containers  '>
            <div class="input-group px-4 d-flex flex-column justify-content-center align-items-center">
                <div class="input-group-prepend">
                    <label className='labele' for="wilaya">Wilaya</label>
                </div>
                <select class="custom-select selecthome" 
                    id="commune"
                    name="commune"
                    value={selectedCommune}
                    onChange={handleCommuneChange}
                    disabled={!selectedWilaya}
                >
                    <option value="">Select Commune</option>
                    {selectedWilaya === 'alger' && (
          <>
                        <option value="bab-zouar">Bab Zouar</option>
                        <option value="zeralda">Zeralda</option>
                    </>
                    )}
                    {selectedWilaya === 'batna' && (
                    <>
                        <option value="arris">Arris</option>
                        <option value="ichemoul">Ichemoul</option>
                    </>
                    )}
                </select>
                </div>
            </div>
            <div className='containers px-4'>
                <label htmlFor="" className='labele'>checkIn</label>
                <input className='inpute' type="date" placeholder='choose date '/>
            </div>
            <div className='containers px-4'>
                <label htmlFor="" className='labele'>CheckOut</label>
                <input className='inpute' type="date" placeholder='choose date '/>
            </div>
            <div className='containers'>
                <Button variant="" className="mx-2 mt-3 signin text-white">search</Button>   
            </div>
            <div className="vertical-divider"></div>
            <div className='containers'>
                <Button data-toggle="modal" data-target=".bd-example-modal-lg" variant="" className="d-flex justify-content-center align-items-center mx-2 mt-3 signup text-dark"> <AiOutlineFilter  style={{ marginRight: '0.5rem' }} />Filter</Button>   
            </div>
        </div>
    </div>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
     <div className="bg-light modal-content">
        <div class="container">
            <div class="container">
                <form action="{{ route('apartment.search') }}" method="GET"> 
                  <div className='mt-3'>
                    <h3>price range</h3>
                    <p>The average nightly price is ‎$80, not including fees or taxes.</p>
                  </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                            <div class="input-group mb-3">
                                <input type="text" name="min" class="form-control" placeholder="Enter your input" aria-label="Enter your input" aria-describedby="minimum-text"/>
                            </div>
                            </div>
                            <div class="col-sm">
                            <div class="input-group mb-3">
                                <input type="text" name="max" class="form-control" placeholder="Enter your input" aria-label="Enter your input" aria-describedby="minimum-text"/>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    <hr className="divider" />
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <h3 >
                                    number of guests
                                </h3>
                                <label for="custom-select " className='mb-2'>choose your apartement type:</label>
                                <div class="input-group mb-3">
                                    <input type="text" name="ming" class="form-control" placeholder="Enter your input" aria-label="Enter your input" aria-describedby="minimum-text"/>
                            </div>

                            </div>
                            <div class="col-sm">
             
                            
                            </div>
                            
                        </div>
                    </div>

                    <hr className="divider " />
                    <h3 >choose a date</h3>
                    <div class="container">
                        <div class="row mb-3">
                            <div class="col-sm">
                                <label for="checkin">checkin</label>
                                <input type="date" id="checkin" name="checkin"/>
                            </div>
                            <div class="col-sm">
                                <label for="checkout">checkout</label>
                                <input type="date" id="checkout" name="checkout"/>
                            </div>
                        </div>
                    </div>
                    <h3 >
                        property type
                    </h3>
                    <div class="container mt-3 mb-2">
                    <div class="row">
                        <div class="col-sm">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" value="apartement" name="type[]" class="custom-control-input" id="customCheck1"/>
                            <label class="custom-control-label" for="customCheck1">apartement</label>
                        </div>
                        </div>
                        <div class="col-sm">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" value="shared house" name="type[]" class="custom-control-input" id="customCheck1"/>
                            <label class="custom-control-label" for="customCheck1">shared house</label>
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                        <div class="custom-control custom-checkbox">
                            <input value="garage" type="checkbox" name="type[]" class="custom-control-input" id="customCheck1"/>
                            <label class="custom-control-label" for="customCheck1">garage</label>
                        </div>
                        </div>
                        <div class="col-sm">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" value="hotel" name="type[]" class="custom-control-input" id="customCheck1"/>
                            <label class="custom-control-label" for="customCheck1">hotel</label>
                        </div>
                        </div>
                    </div>
                </div>
                <hr className="divider " />
                    <h3 >
                        perks
                    </h3>

                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" value="wifi" name="perks[]" class="custom-control-input" id="customCheck1"/>
                                <label class="custom-control-label" for="customCheck1">wifi</label>
                            </div>
                            </div>
                            <div class="col-sm">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" value="tv" name="perks[]" class="custom-control-input" id="customCheck1"/>
                                <label class="custom-control-label" for="customCheck1">tv</label>
                            </div>
                            </div>  
                        </div>
                        <div class="row">
                            <div class="col-sm">
                            <div class="custom-control custom-checkbox">
                                <input value="dryer" type="checkbox" name="perks[]" class="custom-control-input" id="customCheck1"/>
                                <label class="custom-control-label" for="customCheck1">dryer</label>
                            </div>
                            </div>
                            <div class="col-sm">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" value="kitchen" name="perks[]" class="custom-control-input" id="customCheck1"/>
                                <label class="custom-control-label" for="customCheck1">kitchen</label>
                            </div>
                            </div>  
                        </div>
                </div>
                <hr className="divider" />
                <h3 >adresse</h3>

                    <div class="container"  >
                        <div class="row">
                            <div class="col-sm">
                            <div class="form-group">
                            <label htmlFor="wilaya">Wilaya:</label>
                                <select id="wilaya" class="form-select" name="wilaya"  value={selectedWilaya} onChange={handleWilayaChange}>
                                    <option value="">Select Wilaya</option>
                                    <option value="alger">Alger</option>
                                    <option value="batna">Batna</option>
                                </select>
                            </div>
                            </div>
                            
                            <div class="col-sm">
                            <div class="form-group">
                            <label htmlFor="commune">Commune:</label>
                                <select class="form-select" name="commune"
                                        id="commune"
                                        value={selectedCommune}
                                        onChange={handleCommuneChange}
                                        disabled={!selectedWilaya}
                                >
                                    <option value="">Select a commune</option>
                                    {selectedWilaya === 'alger' && (
                                            <>
                                                <option value="bab-zouar">Bab Zouar</option>
                                                <option value="zeralda">Zeralda</option>
                                            </>
                                            )}
                                            {selectedWilaya === 'batna' && (
                                            <>
                                                <option value="arris">Arris</option>
                                                <option value="ichemoul">Ichemoul</option>
                                            </>
                                            )}
                                </select>
                            </div>
                            </div>
                            </div>
                            
                    </div>
                    <hr className="divider" />
                    <div>
                        <button type="submit" className="signin mb-3 mt-3 px-3 py-2 text-light ">Submit</button>
                    </div>   
                </form>
            </div>
        </div>
     </div>
  </div>
</div>
    </div>
    
  );
}

export default Home;
