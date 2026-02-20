export default function LogosSection() {
  const logos = [
    { name: 'Stripe', url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
    { name: 'Shopify', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
    { name: 'Salesforce', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
    { name: 'HubSpot', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg' },
    { name: 'Zendesk', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg' },
    { name: 'Intercom', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Intercom-logo.svg' }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-20 flex-wrap opacity-30">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.url}
              alt={logo.name}
              className="h-6 w-auto brightness-0 invert"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
