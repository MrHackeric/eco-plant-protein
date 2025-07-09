import React from "react";
import {
  Email as EmailIcon,
  Business as BusinessIcon,
  Chat as ChatIcon,
  Public as PublicIcon,
  Pets as PetsIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Person as PersonIcon,
  LinkedIn as LinkedInIcon,
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextareaAutosize,
} from "@mui/material";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <HeroSection />
      <div className="contact-content">
        <ContactInfo />
        <ContactForms />
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Let's talk sustainable proteins</h1>
        <p>
          Whether you're a partner, potential collaborator, or simply curious
          about our sustainable protein solutions, we're eager to hear from you.
        </p>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  return (
    <div className="contact-info-section">
      <div className="contact-card">
        <h3>Get in touch</h3>

        <div className="contact-method">
          <div className="contact-icon">
            <EmailIcon />
          </div>
          <div>
            <h4>Email us</h4>
            <a href="mailto:info@econutri.com">info@econutri.com</a>
          </div>
        </div>

        <div className="contact-method">
          <div className="contact-icon">
            <PhoneIcon />
          </div>
          <div>
            <h4>Call us</h4>
            <a href="tel:+436641691137">+43 664 169 1137</a>
          </div>
        </div>

        <div className="contact-method">
          <div className="contact-icon">
            <LocationIcon />
          </div>
          <div>
            <h4>Visit us</h4>
            <p>Econutri HQ, Vienna, Austria</p>
          </div>
        </div>

        <div className="social-links">
          <a href="https://linkedin.com/company/econutri" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactForms = () => {
  return (
    <div className="contact-forms-section">
      <SampleRequestForm />
      <PartnershipForm />
    </div>
  );
};

const SampleRequestForm = () => {
  return (
    <div className="form-card">
      <h3>Request a sample</h3>
      <p>Please answer a few questions to get a sample of our protein.</p>

      <form>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="name">Your Name</InputLabel>
          <TextField
            id="name"
            variant="outlined"
            InputProps={{
              startAdornment: <PersonIcon color="action" sx={{ mr: 1 }} />,
            }}
            required
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="email">Your E-Mail</InputLabel>
          <TextField
            id="email"
            type="email"
            variant="outlined"
            InputProps={{
              startAdornment: <EmailIcon color="action" sx={{ mr: 1 }} />,
            }}
            required
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="company">Your Company Name</InputLabel>
          <TextField
            id="company"
            variant="outlined"
            InputProps={{
              startAdornment: <BusinessIcon color="action" sx={{ mr: 1 }} />,
            }}
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="country-label">Select Country</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            label="Select Country"
            startAdornment={<PublicIcon color="action" sx={{ mr: 1 }} />}
            required
          >
            <MenuItem value="">
              <em>Select your country</em>
            </MenuItem>
            <MenuItem value="AT">Austria</MenuItem>
            <MenuItem value="DE">Germany</MenuItem>
            <MenuItem value="CH">Switzerland</MenuItem>
          </Select>
        </FormControl>

        <div className="form-row">
          <FormControl component="fieldset" margin="normal" sx={{ flex: 1 }}>
            <label>Sample Size</label>
            <RadioGroup row name="sample-size" defaultValue="50gr">
              <FormControlLabel value="50gr" control={<Radio />} label="50gr" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" margin="normal" sx={{ flex: 1 }}>
            <label>Product Type</label>
            <RadioGroup row name="product-type" defaultValue="Livestock Food">
              <FormControlLabel
                value="Livestock Food"
                control={<Radio />}
                label={
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <PetsIcon sx={{ mr: 1 }} /> Livestock Food
                  </span>
                }
              />
            </RadioGroup>
          </FormControl>
        </div>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="note">Your Note</InputLabel>
          <TextField
            id="note"
            multiline
            rows={4}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <ChatIcon
                  color="action"
                  sx={{ mr: 1, mt: 1, alignSelf: "flex-start" }}
                />
              ),
            }}
          />
        </FormControl>

        <div className="form-footer">
          <p>
            By clicking "Agree & Submit," you confirm your acceptance of our
            primary policy.
          </p>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<SendIcon />}
            sx={{ mt: 2 }}
          >
            Submit Request
          </Button>
        </div>
      </form>
    </div>
  );
};

const PartnershipForm = () => {
  return (
    <div className="form-card">
      <h3>Partnership Inquiry</h3>
      <p>Are you interested in a partnership?</p>

      <form>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="partner-name">Your Name</InputLabel>
          <TextField
            id="partner-name"
            variant="outlined"
            InputProps={{
              startAdornment: <PersonIcon color="action" sx={{ mr: 1 }} />,
            }}
            required
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="partner-email">Your E-Mail</InputLabel>
          <TextField
            id="partner-email"
            type="email"
            variant="outlined"
            InputProps={{
              startAdornment: <EmailIcon color="action" sx={{ mr: 1 }} />,
            }}
            required
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="partner-company">Your Company Name</InputLabel>
          <TextField
            id="partner-company"
            variant="outlined"
            InputProps={{
              startAdornment: <BusinessIcon color="action" sx={{ mr: 1 }} />,
            }}
            required
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="partner-message">Your Message</InputLabel>
          <TextField
            id="partner-message"
            multiline
            rows={4}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <ChatIcon
                  color="action"
                  sx={{ mr: 1, mt: 1, alignSelf: "flex-start" }}
                />
              ),
            }}
            required
          />
        </FormControl>

        <div className="form-footer">
          <p>
            By clicking "Agree & Submit," you confirm your acceptance of our
            privacy policy.
          </p>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<CheckCircleIcon />}
            sx={{ mt: 2 }}
          >
            Submit Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
