import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit iste a quo consequatur dicta ab aspernatur dolorem ad.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "'100's of Diverse Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit iste a quo consequatur dicta ab aspernatur dolorem ad.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Pro and Expert Trainers",
    description:
      "Veniam perferendis fuga, ipsum illum quis provident. Molestiae ratione vel voluptate doloremque. Incidunt, ad eligendi!",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      {/* ВЫДЕЛЯЕТ ПУНКТ В НАВИГАЦИИ ПРИ РОКРТКЕ ДО ЭТОГО РАЗДЕЛА??????? ПРОВЕРИТЬ */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0.5, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <Htext>MORE THAT JUST A GYM</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            dicta animi maiores eos labore. Quia nesciunt repellat quasi et
            quaerat tempora consequuntur suscipit quibusdam facere maxime.
            Soluta doloribus amet explicabo.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto"
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0.5, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING {""}
                    <span className="text-primary-500">FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0.5, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                similique explicabo totam nemo fugiat recusandae rem animi est
                amet! Reprehenderit porro officiis quod excepturi. Ab, ipsa?
                Laudantium neque optio iste?
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                itaque dolorum reprehenderit magnam facilis, praesentium alias
                perferendis quis dolores mollitia adipisci similique! Possimus
                voluptatum tempora dicta quis, omnis animi optio. Possimus sed
                natus voluptates rerum amet soluta tempore consectetur, illum
                quibusdam quos explicabo beatae nisi quaerat dignissimos, totam
                iure quis pariatur vel delectus est recusandae. Iusto ducimus
                eaque molestias saepe.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"></div>
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
