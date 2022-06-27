function createContactSection() {
  const contactSection = document.createElement("div");
  contactSection.id = "contactSection";

  let title = document.createElement("h1");
  title.textContent = "Salivating? Get in touch!";

  let address = document.createElement("div");
  address.textContent = "Mars' dining bowl : woof woof road 32";

  let map = document.createElement("iframe");
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10353.89224393539!2d-122.17620417015705!3d37.4269549290026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb2aa03652bf%3A0x563a619a26e2e880!2sStanford%20University%20Department%20of%20Mechanical%20Engineering!5e0!3m2!1sen!2ssg!4v1656303659582!5m2!1sen!2ssg";

  let details = document.createElement("div");
  let reservations = document.createElement("h2");
  reservations.textContent = "Make Reservations?";
  let phone = document.createElement("p");
  phone.textContent = "Call us at: 1234567890";
  let enquiries = document.createElement("h2");
  enquiries.textContent = "Other enquiries?";
  let email = document.createElement("p");
  email.textContent = "Contact us at woofwoof@doggomail.com";
  details.appendChild(reservations);
  details.appendChild(phone);
  details.appendChild(enquiries);
  details.appendChild(email);

  contactSection.appendChild(title);
  contactSection.appendChild(address);
  contactSection.appendChild(address);
  contactSection.appendChild(map);
  contactSection.appendChild(details);

  return contactSection;
}

function loadContact() {
  let content = document.getElementById("content");
  content.appendChild(createContactSection());
  return content;
}

export { loadContact };
