var button = document.createElement('button')
button.id = 'solveButton';
button.className = 'button';
button.innerHTML = 'Solve';
button.onclick = () => document.getElementById("input").value = document.getElementById('text').textContent;

document.getElementsByClassName('inputField')[0].append(button)

for(button of document.getElementsByClassName('button')) {
   button.style.marginLeft = '13%';
}