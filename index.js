const count = document.getElementById('count')
const message = document.getElementById('message')

message.addEventListener('input', () => {
    const currentLength = message.value.length;
    count.textContent = `${currentLength} / 250`;

    if (currentLength == 0)
    {
        message.classList.replace('text-red-500', 'text-black')
        message.classList.replace('border-red-500', 'border-black');
        count.classList.replace('text-red-500', 'text-black');
    }
    else if (currentLength < 250)
    {
        message.classList.replace('text-red-500', 'text-black');
        message.classList.replace('border-red-500', 'border-black');
        count.classList.replace('text-red-500', 'text-black');
    }
    else
    {
        message.classList.add('text-red-500')
        message.classList.replace('border-black', 'border-red-500')
        count.classList.replace('text-black', 'text-red-500')
    }
})
