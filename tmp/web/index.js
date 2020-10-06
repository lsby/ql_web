import $ from 'jquery'
import React from "aurantium"
import data from '@web/data'

window.全局数据 = data

$('#app').append(
    <iframe src='/page/index.html' style="height: 100%; width:100%; border: 0px;"></iframe>
)
