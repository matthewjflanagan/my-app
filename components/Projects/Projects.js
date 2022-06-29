import React from 'react';
import Link from 'next/link';
import { BlogCard, CardInfo, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, SocialIcons } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Link href={visit} passHref><Img src={image}/></Link>
          <TitleContent>
            <HeaderThree title="true">{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <SocialIcons href={source}>
              <AiFillGithub size="3rem" />
            </SocialIcons>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;