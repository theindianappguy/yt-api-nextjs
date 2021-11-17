const YtCard = ({ title, imgUrl, desc, link }) => {
  return (
    <div
      style={{
        width: "328px",
        padding: "4px",
        borderRadius: "8px",
      }}
    >
      <div>
        <a href={link} target='_blank' rel='noreferrer'>
          <div>
            <div
              className='p-4 pb-1 rounded'
              style={{ backgroundColor: "white" }}
            >
              <img
                className='rounded'
                src={imgUrl}
                alt={title}
                height='180px'
                width='320px'
                style={{ border: "1px solid #ccc" }}
              />
            </div>
            <div className='p-4' style={{ backgroundColor: "white" }}>
              <h3 className='font-bold text-1xl line-clamp-1'>{title}</h3>
              <p className='my-2 line-clamp-2'>{desc}</p>
              <p className='flex items-center'>
                {`youtube.com`}
                <svg
                  stroke='currentColor'
                  fill='none'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='ml-2'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'></path>
                  <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'></path>
                </svg>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default YtCard;
