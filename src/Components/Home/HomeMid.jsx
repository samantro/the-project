import React from 'react';
import Products from './Products'


export default function HomeMid(){

    return (
        <div>
            <div className='products'>
            <h2>Supplies</h2>
            <br />
            <Products/>
            </div>
            <hr class="featurette-divider"/>

            <div className='products'>
            <h2>Local Pharamacies</h2>
            <br />
            <Products/>
            </div>
            <hr class="featurette-divider"/>

            <div className='products'>
            <h2>Lab Tests</h2>
            <br />
            <Products/>
            </div>
            <hr class="featurette-divider"/>
            

        </div>

    );

}