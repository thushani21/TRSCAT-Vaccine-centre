import styled from 'styled-components';
import Footer from '@govuk-react/footer';
import footerLogo from './Images/copyright.png';

// @author done by Camila, Thushani, Amanah, Thiviya and Saba

function MyFooter() {

    return (
        <>
            <Footer className="footer"
                meta={
                    <div>
                        <img src={footerLogo} className="footerLogo" />
                        <div className="footerLinks1">
                            <Footer.Link href="/">
                                Help
                            </Footer.Link>
                            <Footer.Link href="/footer-meta-item-2">
                                Cookies
                            </Footer.Link>
                            <Footer.Link href="/">
                                Contact
                            </Footer.Link>
                            <Footer.Link href="/">
                                Terms and conditions
                            </Footer.Link>
                            <Footer.Link href="/footer-meta-item-2">
                                Rhestr o Wasanaethau Cymraeg
                            </Footer.Link>
                            <Footer.Link href="/footer-meta-item-2">
                                Accessibility
                            </Footer.Link>
                        </div>

                        <div className="footerLinks2">
                            <Footer.MetaCustom >
                                Built by the {"TRSCAT Medical Services  "}
                                <Footer.Link href="/">Government Digital Service</Footer.Link>
                            </Footer.MetaCustom>
                        </div>
                    </div>
                }
            />
        </>
    );
}
export default MyFooter;