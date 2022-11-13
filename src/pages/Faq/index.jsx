import Accordion from "../../components/accordion/accordion";
import PageHeader from "../../components/global/PageHeader";
import classes from "./faq.module.css";
const Faq = () => {
  return (
    <section className={classes.faq}>
      <PageHeader title={"FAQ"} subTitle={"Frequently Asked Questions Page"} />
      <Accordion
        title={"An Important Question"}
        question={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
      />
      <Accordion
        title={"An Important Question"}
        question={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
      />
      <Accordion
        title={"An Important Question"}
        question={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
      />
      <Accordion
        title={"An Important Question"}
        question={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
      />
      <Accordion
        title={"An Important Question"}
        question={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
      />
    </section>
  );
};

export default Faq;
