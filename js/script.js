
const productFeatures = {
    berryBlast: {
      ingredients: {
        title: "Natural Ingredients",
        description:
          "Our Berry Blast is made with 100% organic strawberries, blueberries, and raspberries. We add a touch of organic apple juice for natural sweetness and a splash of lemon juice to enhance the flavors. No artificial ingredients, preservatives, or added sugars.",
        image: "/placeholder.svg?height=200&width=200",
      },
      nutrition: {
        title: "Nutritional Benefits",
        description:
          "Each 12oz bottle contains: 120 calories, 0g fat, 28g carbohydrates (24g natural sugars), 2g protein, and 6g fiber. Rich in vitamin C (120% daily value), vitamin K, manganese, and powerful antioxidants that help fight inflammation and support immune health.",
        image: "/placeholder.svg?height=200&width=200",
      },
      benefits: {
        title: "Health Benefits",
        description:
          "Berries are known as superfoods for good reason! They're packed with antioxidants that help protect cells from damage, support brain health, and may reduce the risk of heart disease. The high vitamin C content supports immune function and collagen production for healthy skin.",
        image: "/placeholder.svg?height=200&width=200",
      },
    },
    tropicalParadise: {
      ingredients: {
        title: "Natural Ingredients",
        description:
          "Our Tropical Paradise juice combines ripe mangoes, sweet pineapples, and tangy passion fruit. We add a hint of coconut water for hydration and natural electrolytes. Every ingredient is carefully sourced for optimal ripeness and flavor.",
        image: "/placeholder.svg?height=200&width=200",
      },
      nutrition: {
        title: "Nutritional Benefits",
        description:
          "Each 12oz bottle contains: 140 calories, 0g fat, 34g carbohydrates (30g natural sugars), 1g protein, and 3g fiber. Excellent source of vitamin C (80% daily value), vitamin A, potassium, and digestive enzymes like bromelain from pineapple.",
        image: "/placeholder.svg?height=200&width=200",
      },
      benefits: {
        title: "Health Benefits",
        description:
          "This tropical blend provides digestive enzymes that aid in protein digestion and absorption. The vitamin A supports eye health, while potassium helps maintain healthy blood pressure. The natural enzymes in pineapple may help reduce inflammation and support recovery after exercise.",
        image: "/placeholder.svg?height=200&width=200",
      },
    },
    greenEnergy: {
      ingredients: {
        title: "Natural Ingredients",
        description:
          "Our Green Energy juice combines nutrient-dense kale and spinach with crisp cucumber and sweet apple. We add a hint of ginger and lemon for a refreshing zing. All ingredients are organic and cold-pressed to preserve nutrients.",
        image: "/placeholder.svg?height=200&width=200",
      },
      nutrition: {
        title: "Nutritional Benefits",
        description:
          "Each 12oz bottle contains: 110 calories, 0g fat, 24g carbohydrates (18g natural sugars), 3g protein, and 4g fiber. Excellent source of vitamins A, C, and K, folate, iron, calcium, and magnesium. Contains powerful plant compounds like lutein and zeaxanthin.",
        image: "/placeholder.svg?height=200&width=200",
      },
      benefits: {
        title: "Health Benefits",
        description:
          "This green juice is a nutrient powerhouse! The leafy greens provide chlorophyll, which supports detoxification. The combination of vitamins and minerals supports bone health, immune function, and energy production. Regular consumption may help reduce inflammation and support healthy digestion.",
        image: "/placeholder.svg?height=200&width=200",
      },
    },
  }

  const promotionData = [
    {
      id: "twoForOne",
      title: "2 for 1 Special Offer",
      description: "Buy one bottle of SQUEEZ IT juice and get another one free!",
      details: [
        "Valid on all 12oz bottles of SQUEEZ IT juice",
        "Mix and match different flavors",
        "Limited time offer - ends April 30, 2025",
        "In-store and online purchases eligible",
        "Cannot be combined with other promotions",
      ],
    },
    {
      id: "freeShipping",
      title: "Free Shipping on Orders Over $30",
      description: "Enjoy free standard shipping on all orders over $30 within the continental US.",
      details: [
        "No promo code needed - automatically applied at checkout",
        "Standard shipping (2-3 business days)",
        "For orders under $30, flat rate shipping of $4.99 applies",
        "International shipping not included in this promotion",
      ],
    },
    {
      id: "subscription",
      title: "Juice Subscription - 15% Off",
      description: "Subscribe to regular deliveries and save 15% on every order!",
      details: [
        "Choose weekly, bi-weekly, or monthly delivery",
        "Customize your juice selection for each delivery",
        "Skip, pause, or cancel anytime",
        "15% discount applied automatically",
        "Free shipping included with all subscription orders",
      ],
    },
  ]

  document.addEventListener("DOMContentLoaded", () => {

    initHotspots()

    initLightbox()

    const contactForm = document.querySelector(".contact-form")
    if (contactForm) {
      initContactForm(contactForm)
    }
  })

  function initHotspots() {
    const hotspots = document.querySelectorAll(".hotspot")
    const featureModal = document.querySelector(".feature-modal")
  
    if (!hotspots.length || !featureModal) return
  

    hotspots.forEach((hotspot) => {
      const dot = hotspot.querySelector(".hotspot-dot")
      if (dot) {
        dot.classList.add("pulse")
      }
  
      hotspot.addEventListener("click", function (e) {
        e.preventDefault()
        e.stopPropagation()
  
        const product = this.getAttribute("data-product")
        const feature = this.getAttribute("data-feature")
  
        showFeatureDetails(product, feature)
      })
    })
  
 
    const closeButton = document.querySelector(".close-modal")
    if (closeButton) {
      closeButton.addEventListener("click", (e) => {
        e.preventDefault()
        featureModal.classList.remove("active")
      })
    }
  
    // Close feature modal when clicking outside the content
    featureModal.addEventListener("click", (e) => {
      if (e.target === featureModal) {
        featureModal.classList.remove("active")
      }
    })
  
    // Prevent closing when clicking inside the modal content
    const modalContent = featureModal.querySelector(".feature-modal-content")
    if (modalContent) {
      modalContent.addEventListener("click", (e) => {
        e.stopPropagation()
      })
    }
  }
  
  // Show feature details in modal
  function showFeatureDetails(product, feature) {
    const featureModal = document.querySelector(".feature-modal")
    const titleElement = document.querySelector(".feature-title")
    const descriptionElement = document.querySelector(".feature-description")
  
    // Find the feature data
    const featureData = productFeatures[product] && productFeatures[product][feature]
  
    if (featureData && featureModal && titleElement && descriptionElement) {
      // Set the content
      titleElement.textContent = featureData.title
  
      // Create the description with image
      let descriptionHTML = `
              <div class="feature-content">
                  <p>${featureData.description}</p>
              </div>
          `
  
      if (featureData.image) {
        descriptionHTML = `
                  <div class="feature-image">
                      <img src="${featureData.image}" alt="${featureData.title}">
                  </div>
                  ${descriptionHTML}
              `
      }
  
      descriptionElement.innerHTML = descriptionHTML
  

      featureModal.style.display = "flex"
      setTimeout(() => {
        featureModal.classList.add("active")
      }, 10)
    }
  }
  

  function initLightbox() {
    const promoCards = document.querySelectorAll(".promo-card")
    const lightbox = document.querySelector(".lightbox")
  
    if (!promoCards.length || !lightbox) return
  
    promoCards.forEach((card) => {
      // Make the entire card clickable
      card.addEventListener("click", function () {
        const promoId = this.getAttribute("data-promo")
        showPromoDetails(promoId)
      })
  
      // Make the button specifically clickable with enhanced visual feedback
      const button = card.querySelector(".promo-button")
      if (button) {
        button.addEventListener("mouseenter", function () {
          this.classList.add("button-hover")
        })
  
        button.addEventListener("mouseleave", function () {
          this.classList.remove("button-hover")
        })
  
        button.addEventListener("click", function (e) {
          e.stopPropagation() 

          this.classList.add("button-active")
          setTimeout(() => {
            this.classList.remove("button-active")
          }, 300)
  
          const promoId = card.getAttribute("data-promo")
          showPromoDetails(promoId)
        })
      }
    })
  

    const closeButton = document.querySelector(".close-lightbox")
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        lightbox.classList.remove("active")
  
  
        setTimeout(() => {
          lightbox.style.display = "none"
        }, 300)
      })
    }
  

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active")
  
        setTimeout(() => {
          lightbox.style.display = "none"
        }, 300)
      }
    })
  

    const lightboxContent = lightbox.querySelector(".lightbox-content")
    if (lightboxContent) {
      lightboxContent.addEventListener("click", (e) => {
        e.stopPropagation()
      })
    }
  }

  function showPromoDetails(promoId) {
    const lightbox = document.querySelector(".lightbox")
    const titleElement = document.querySelector("#lightbox-title")
    const descriptionElement = document.querySelector("#lightbox-description")
    const detailsElement = document.querySelector("#lightbox-details")
  

    const promo = promotionData.find((item) => item.id === promoId)
  
    if (promo && lightbox && titleElement && descriptionElement && detailsElement) {
    
      titleElement.textContent = promo.title
      descriptionElement.textContent = promo.description
  
      let detailsHTML = '<ul class="promo-details-list">'
      promo.details.forEach((detail) => {
        detailsHTML += `<li>${detail}</li>`
      })
      detailsHTML += "</ul>"
  
    
      detailsHTML += `
              <div class="promo-cta">
                  <button class="btn">Claim This Offer</button>
              </div>
          `
  
      detailsElement.innerHTML = detailsHTML
  
   
      lightbox.style.display = "flex"
  
      const lightboxContent = lightbox.querySelector(".lightbox-content")
      if (lightboxContent) {
        lightboxContent.style.transform = "translateY(20px)"
        lightboxContent.style.opacity = "0"
      }
  

      setTimeout(() => {
        lightbox.classList.add("active")
        if (lightboxContent) {
          lightboxContent.style.transform = "translateY(0)"
          lightboxContent.style.opacity = "1"
        }
      }, 10)
  
   
      const ctaButton = detailsElement.querySelector(".promo-cta .btn")
      if (ctaButton) {
        ctaButton.addEventListener("click", () => {
          alert(`Offer "${promo.title}" has been applied to your account!`)
  

          lightbox.classList.remove("active")
          setTimeout(() => {
            lightbox.style.display = "none"
          }, 300)
        })
      }
    }
  }

  function initContactForm(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()
  

      const name = form.querySelector("#name").value.trim()
      const email = form.querySelector("#email").value.trim()
      const subject = form.querySelector("#subject").value.trim()
      const message = form.querySelector("#message").value.trim()

      if (!name || !email || !subject || !message) {
        showFormMessage("Please fill in all fields", "error")
        return
      }
  
      if (!isValidEmail(email)) {
        showFormMessage("Please enter a valid email address", "error")
        return
      }
  

      setTimeout(() => {
        showFormMessage("Thank you for your message! We will get back to you soon.", "success")
        form.reset()
      }, 1000)
    })
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  function showFormMessage(message, type) {
    const messageElement = document.querySelector(".form-message")
    if (!messageElement) return
  
    messageElement.textContent = message
    messageElement.className = "form-message"
    messageElement.classList.add(type)
  

    setTimeout(() => {
      messageElement.style.display = "none"
    }, 5000)
  
    messageElement.style.display = "block"
  }
  

  const newsletterForms = document.querySelectorAll(".newsletter-form")
  newsletterForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault()
  
      const emailInput = this.querySelector('input[type="email"]')
      const email = emailInput.value.trim()
  
      if (!email || !isValidEmail(email)) {
        alert("Please enter a valid email address")
        return
      }
  
 
      alert("Thank you for subscribing to our newsletter!")
      emailInput.value = ""
    })
  })
  

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
  
      const targetId = this.getAttribute("href")
      if (targetId === "#") return
  
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
  

  window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".product-card, .benefit-item, .promo-card")
  
    elements.forEach((element) => {
      const position = element.getBoundingClientRect()

      if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add("animate")
      }
    })
  })
  