/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {

    // initledger

    async initLedger(ctx){
        await ctx.stub.putState("test", "hello world!")
        return "success"
    }

    // writedata 

    async writeData(ctx, key, value){

        await ctx.stub.putState(key,value)
        return value;

    }

    // readdata

    async readData(ctx, key){
        var res = await ctx.stub.getState(key)
        return res.toString()
    }


}

module.exports = FabCar;
