function Image(){
    const [img1, setImg1] = React.useState(false)
    const [img2, setImg2] = React.useState(false)
    const [img3, setImg3] = React.useState(false)
    
    function toggle1(){
        setImg1(true)
        setImg2(false)
        setImg3(false)
    }
    function toggle2(){
        setImg2(true)
        setImg1(false)
        setImg3(false)
    }
    function toggle3(){
        setImg3(true)
        setImg2(false)
        setImg1(false)
    }

    return(
        <div className='container'>
            <div className='container-2'>
                    <div className="con">
                        <img onClick={toggle1} className={img1 ? '' : 'half'} src="img/Rectangle 8863.png" /> 
                        <p className={img1 ? 'show' : 'hid'}>Chef 1 Ramsey</p>
                    </div>
                   
                    <div className="con">
                        <img onClick={toggle2} className={img2 ? '' : 'half'} src="img/Rectangle 8863-1.png" />
                        <p className={img2 ? 'show' : 'hid'}>Chef 2 Florida</p>
                    </div>
                    <div className="con">
                        <img onClick={toggle3} className={img3 ? '' : 'half'} src="img/Rectangle 8863-2.png" />
                        <p className={img3 ? 'show' : 'hid'}>Chef 3 Korede Bello</p>
                    </div>
            </div>
        </div>
    )
}
function App(){
    return(
        <div>
            <Image />
        </div>
    )
}



ReactDOM.render(<App/>, document.getElementById('root'))