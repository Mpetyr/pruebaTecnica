/****** Object:  Database [historial]    Script Date: 21/11/2022 10:37:09 a. m. ******/
CREATE DATABASE [historial]

CREATE TABLE [dbo].[acronimePrueb](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Acronimo] [varchar](50) NOT NULL,
	[Fecha] [datetime] NULL
	)
GO
ALTER TABLE [dbo].[acronime] ADD PRIMARY KEY (Id)
GO
ALTER TABLE [dbo].[acronime] ADD  CONSTRAINT [DF_acronime_Fecha]  DEFAULT (getdate()) FOR [Fecha]
GO
ALTER DATABASE [historial] SET  READ_WRITE 
GO
