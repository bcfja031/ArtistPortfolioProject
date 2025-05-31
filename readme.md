# todo:

- implement navigation on main page [x]
- refine where login shall happen [x]
- check login redirects [x]
- implement logout [x]
- check every model to correspond to ER diagram (both names and content) [x]
    - refine Collaborations Publishes Excibition and first episodes of first season [x]
    - refine front to correspond to models [x]
        <details>
        <summary>artist [x]</summary>
        
        - TABLE Artist [x]
        - IdArtist [x]
        - FullNameArtist [x]
        - AgeArtist [x]
        - BriefBiography [x]
        - PhoneNumberArtist [x]
        - EmailArtist [x]
        - PasswordArtist [x]
        </details>

        <details>
        <summary>picture [x]</summary>
        
        - TABLE Pictures [x]
        - IdPicture [x]
        - NameOfPicture [x]
        - DescribtionOfPicture [x]
        - StyleOfDrawing [x]
        - YearOfDrawing [x]
        - Materials [x]
        - Price [x]
        - ConditionPictures [x]
        </details>

        <details>
        <summary>merch [x]</summary>
        
        - TABLE Merch [x]
        - IdMerch [x]
        - NameOfMerch [x]
        - TypeOfMerch  [x]
        - Price [x]
        - ConditionMerch [x]
        </details>

        <details>
        <summary>client [x]</summary>
        
        - TABLE Client [x]
        - IdClient [x]
        - FullNameClient [x]
        - AgeClient [x]
        - PasswordClient [x]
        - EmailClient [x]
        - PhoneNumberClient [x]
        </details>

        <details>
        <summary>brand [x]</summary>
        
        - TABLE Brand [x]
        - IdBrand [x]
        - NameOfCompany [x]
        - TermsOfAgreement [x]
        - TypeOfProduct [x]
        - Price [x]
        </details>

        <details>
        <summary>Journal [x]</summary>
        
        - TABLE Journal [x]
        - IdJournal [x]
        - NameOfJournal [x]
        - JournalRequerments [x]
        - JournalStake [x]
        </details>

        <details>
        <summary>gallery [x]</summary>

        - TABLE Gallery [x]
        - IdGallery [x]
        - NameOfGallery [x]
        - GalleryStake [x]
        </details>

        <details>
        <summary>review [x]</summary>

        - TABLE Review [x]
        - IdReview [x]
        - IdArtist [x]
        - IdClient [x]
        - Comment [x]
        - ALTER TABLE Review 
        -ADD FOREIGN KEY (IdArtist) REFERENCES Artist (IdArtist) ON DELETE CASCADE [x]
        - ALTER TABLE Review 
        - ADD FOREIGN KEY (IdClient) REFERENCES Client (IdClient) ON DELETE CASCADE [x]
        </details>

        <details>
        <summary>collaborations [x]</summary>

        - TABLE Collaborations [x]
        - IdCollaborations [x]
        - IdArtist [x]
        - IdIdBrand [x]
        - ALTER TABLE Collaborations 
        - ADD FOREIGN KEY (IdArtist) REFERENCES Artist (IdArtist) ON DELETE CASCADE [x]
        - ALTER TABLE Collaborations 
        - ADD FOREIGN KEY (IdBrand) REFERENCES Brand (IdBrand) ON DELETE CASCADE [x]
        </details>

        <details>
        <summary>publishes [x]</summary>

        - TABLE Publishes [x]
        - IdPublish [x]
        - IdArtist [x]
        - IdJournal  [x]
        - ALTER TABLE Publishes [x]
        - ADD FOREIGN KEY (IdArtist) REFERENCES Artist (IdArtist) ON DELETE CASCADE [x]
        - ALTER TABLE Publishes [x]
        - ADD FOREIGN KEY (IdJournal) REFERENCES Journal (IdJournal) ON DELETE CASCADE [x]
        </details>

        <details>
        <summary>exhibition [x]</summary>
        
        - TABLE Exhibition [x]
        - IdExhibition [x]
        - IdArtist [x]
        - IdGallery [x]
        - ALTER TABLE Exhibition [x]
        - ADD FOREIGN KEY (IdArtist) REFERENCES Artist (IdArtist) ON DELETE CASCADE [x]
        - ALTER TABLE Exhibition [x]
        - ADD FOREIGN KEY (IdGallery) REFERENCES Gallery (IdGallery) ON DELETE CASCADE [x]           
        </details>



    - refine pugs [x]
- sleep well [ ]

