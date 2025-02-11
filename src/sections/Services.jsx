import { services } from '../constants';

function Services() {
  return (
    <section className="max-container flex flex-wrap justify-center gap-9">
      {services.map((service) => {
        return <div key={service.label}>{service.label}</div>;
      })}
    </section>
  );
}

export default Services;
