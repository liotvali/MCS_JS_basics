const bodyColored = document.body;
bodyColored.style['background-color'] = '#696969';

const pageColored = document.querySelector('.page');
pageColored.style['background-color'] = 'ghostwhite';

const selectName = document.querySelector('.name');
selectName.innerHTML = '<span>DJ Rashad<span>'; 

const imageDj = document.querySelector('img');
imageDj.setAttribute('src', 'https://le-drone.com/__cache/robert/img/__db/localhost/glspxueq_dev/theDrone/uids/22301/crop-dj-rashad-press-2013.jpg/380-214-nb/ffffff-80.jpg');

const borderAnimated = document.querySelector('.short-bio');
borderAnimated.className += ' animated';