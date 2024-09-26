function ContactUsPage() {
    return<>
    
    <div className="contact-area d-flex align-items-center">

        <div className="google-map">
            <iframe id="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.9242148442563!2d31.337249374649264!3d30.096356716110925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815e440c05a61%3A0xd0091722519af836!2sStaron%20Egypt!5e0!3m2!1sen!2seg!4v1691408655956!5m2!1sen!2seg" width="600" height="450"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>

        <div className="contact-info">
            <h2>How to Find Us</h2>
            <p>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.</p>

            <div className="contact-address mt-50">
                <p><span>address:</span> 95 Abu Bakr Al Seddek St., Heliopolis, eg</p>
                <p><span>telephone:</span> +12 34 567 890</p>
                <p><a href="mailto:contact@essence.com">contact@essence.com</a></p>
            </div>
        </div>

    </div>
    </>
}
export default ContactUsPage;