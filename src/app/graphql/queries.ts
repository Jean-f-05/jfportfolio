import { gql } from 'graphql-request'


export const GET_HOME = gql`
query Homes {
    homes {
      title
      heroImage {
        id
        url
      }
      heroText {
        firstLine
        secondLine
        thirdLine
        fourthLine
      }
      whoamiSection {
        id
        sectionRef
        text
        sectionBg {
          url
        }
      }
      whoamiParagraph
      carousel {
        ... on Carousel {
          id
          carouselImage {
            ... on Image {
              image {
                url
              }
              alt
            }
          }
        }
      }
      stackSection {
        sectionRef
        text
        sectionColor
        sectionBg {
          url
        }
      }
      stackIcons {
        iconName
        iconSize
        iconColor {
          hex
        }
      }
      portfolioSection {
        sectionRef
        text
        sectionColor
        sectionBg {
          url
        }
      }
      portfolioCard {
        cardImage {
          alt
          image {
            url
          }
        }
      }
    }
  }
  
`