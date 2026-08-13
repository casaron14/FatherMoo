// Configuration file for portfolio content
// Update these values to customize the portfolio

const CONFIG = {
    // Personal Information
    profile: {
        name: "Japhet Moo",
        role: "Inkryptus IBO",
        description: "Professional portfolio showcasing experiences and services"
    },

    // Social Media Links (update with actual profiles)
    social: {
        whatsapp: "https://wa.me/255717097704",  // Replace with actual phone number
        instagram: "https://instagram.com/crypto_digital_shares",
        tiktok: "https://tiktok.com/@digitalsharesinvestor13",
        vcf: "fathermoo.vcf"
    },

    // Statistics Section
    stats: [
        { number: "3+", label: "Experiences" },
        { number: "1500+", label: "Happy Clients" }
    ],

    // Call to Action
    cta: {
        buttonText: "Download Inkryptus",
        downloadUrl: "https://link.inkryptus.com/fathermoo"  // Update with actual download link
    },

    // Contact Button Action
    contact: {
        buttonText: "Contact Me",
        action: "openContactForm"  // or email, form submission, etc.
    }
};

// Export for use in scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
